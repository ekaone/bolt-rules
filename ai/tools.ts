import { tool } from "ai";
import { z } from "zod";

// Weather tool
export const weatherTool = tool({
  description: "Display the weather for a location",
  parameters: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),
  execute: async function ({ location }) {
    try {
      // First, get coordinates for the location using Open-Meteo's geocoding API
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          location
        )}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results?.[0]) {
        throw new Error(`Location "${location}" not found`);
      }

      const { latitude, longitude } = geoData.results[0];

      // Then get weather data using the coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
      );
      const weatherData = await weatherResponse.json();

      // Map weather codes to descriptions
      const weatherCodes: { [key: number]: string } = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail",
      };

      return {
        weather: weatherCodes[weatherData.current.weather_code] || "Unknown",
        temperature: Math.round(weatherData.current.temperature_2m),
        location: geoData.results[0].name,
      };
    } catch (error) {
      console.error("Weather API error:", error);
      return {
        weather: "Error fetching weather",
        temperature: 0,
        location,
      };
    }
  },
});

// Schedule tool
export const scheduleTool = tool({
  description: "Get information about hackathon events and important dates",
  parameters: z.object({
    period: z
      .enum(["registration", "submission", "judging", "all"])
      .describe("Which period of the hackathon to get information about"),
  }),
  execute: async function ({ period }) {
    const schedule = {
      registration: {
        start: "April 16, 2025 10:00 AM Pacific Time",
        end: "June 30, 2025 2:00 PM Pacific Time",
        description:
          "Registration Period - Sign up to participate in the hackathon",
      },
      submission: {
        start: "May 30, 2025 12:15 AM Pacific Time",
        end: "June 30, 2025 2:00 PM Pacific Time",
        description: "Submission Period - Build and submit your project",
      },
      judging: {
        start: "July 7, 2025 10:00 AM Pacific Time",
        end: "July 22, 2025 5:00 PM Pacific Time",
        description: "Judging Period - Projects will be evaluated by judges",
      },
      winners: {
        date: "July 26, 2025 10:00 AM Pacific Time",
        description: "Winners Announcement",
      },
    };

    if (period === "all") {
      return {
        periods: Object.entries(schedule).map(([key, value]) => ({
          period: key,
          ...value,
        })),
      };
    }

    return {
      period,
      ...schedule[period],
    };
  },
});

export const tools = {
  displayWeather: weatherTool,
  displaySchedule: scheduleTool,
};
