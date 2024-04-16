import { useState } from 'react'

interface SearchBarProp {
    handleSearch(e: React.FormEvent<HTMLFormElement>, searchTerm: string): void
    // handleSearch: (e: React.FormEvent<HTMLFormElement>, searchTerm: string) => {}
}

function SearchBar(props: SearchBarProp){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
