const Card = ({ children, bg = 'bg-indigo-100' }) => {
    return (
        <div className={`p-6 rounded-lg shadow-md ${bg}`}>{children}</div>
    )
}

export default Card