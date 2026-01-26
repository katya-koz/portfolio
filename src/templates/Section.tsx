function Section({
  name,
  children,
}: {
  name: string;
  children: React.ReactElement;
}) {
  return (
    <div className="section" id={name}>
      {children}
    </div>
  );
}

export default Section;
