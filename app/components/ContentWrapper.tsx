export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-52">{children}</div>
  );
}
