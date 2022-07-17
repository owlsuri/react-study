export default function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0 0 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <hi>{title}</hi>}
      {/* containment */}
      {children}
    </div>
  );
}
