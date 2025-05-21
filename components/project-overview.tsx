import NextLink from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end p-4">
      <h1 className="text-3xl font-semibold mb-4">Bolt Hackathon Rules</h1>
      <p className="text-center">
        A Chatbot for the World's Largest Hackathon by Bolt (
        <Link href="https://worldslargesthackathon.devpost.com/rules">
          Rules
        </Link>
        , <Link href="https://bolt.new/">Bolt</Link>, and{" "}
        <Link href="https://worldslargesthackathon.devpost.com/details/badgeguidelines">
          Guidelines
        </Link>
        ) with the{" "}
        <Link href="https://info.devpost.com/legal/terms-of-service">
          Devpost Terms of Service
        </Link>
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};
