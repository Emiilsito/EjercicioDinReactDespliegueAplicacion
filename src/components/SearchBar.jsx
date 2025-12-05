function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar...", className = '' }) {
    return (
        <div className={`mb-6 w-full max-w-lg mx-auto mt-4 ${className}`.trim()}>
            <label htmlFor="search-input" className="sr-only">{placeholder}</label>

            <input
                id="search-input"
                type="search"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-500 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition duration-150 ease-in-out"
                aria-label={placeholder}
            />
        </div>
    );
}
export default SearchBar;