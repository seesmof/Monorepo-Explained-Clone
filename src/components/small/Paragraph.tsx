const Paragraph = ({
  children,
  className: classes,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-lg text-stone-700 ${classes}`}>{children}</p>;
};

export default Paragraph;
