 type SearchBarProps = {
  filterEmployees: string;
  setFilterEmployees: (value: string) => void;
};

export function SearchBar({
    filterEmployees,
    setFilterEmployees
}: SearchBarProps) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={filterEmployees}
                onChange={(event) =>
                    setFilterEmployees(event.target.value)
                }
            />
            <label> search for employee</label>
        </div>
    );
}