function Alert({children, onClose, ...props}) {
  return (
    <div className="p-4 w-full bg-darkAccent shadow" {...props}>
      { onClose &&
        <button className="ml-4 font-bold float-right text-lg appearance-none" onClick={onClose}>&times;</button>
      }
      {children}
    </div>
  )
}

export default Alert
