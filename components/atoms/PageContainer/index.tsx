/*
  Wraps around the entire contents of a page. Allows for fixed footers that stay fixed at the bottom.
 */
export default function PageWrapper({children}) {
  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
      {children}
    </div>
  )
}