export const fetchUsers = async (seed,page=1) => {
    const QUERY_STRING=`https://randomuser.me/api/?results=10&nat=us&page=${page}`+
                        (typeof seed === 'undefined' ? "":`&seed=${seed}`);
    const response = await fetch(QUERY_STRING)
    const results = await response.json()
    return {
        seed:results.info.seed,
        nextPage:results.info.page+1,
        users:results.results
    };
}