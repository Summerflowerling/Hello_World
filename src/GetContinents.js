import { useQuery, gql } from "@apollo/client";

//Define query
export const GET_CONTINENTS = gql`
query { 
    continents{
        code
        name
          countries{
          code
          name
          native
          capital
          currency
          languages{
                name
                }
          }       
    }
  }  
`;

function GetContinents() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const children = data.continents.map((item) => (
        <tbody key={item.code}>
            <tr>
                <td><a href={item.name}>{item.code}</a></td>
                <td><a href={item.name}>{item.name}</a></td>
                <td>{item.countries.length}</td>
            </tr>
        </tbody>
    ))

    return (
        <div>
            <table id="continent" className="table-width">
                <colgroup span="3"></colgroup>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Name of Countries</th>
                    </tr>
                </thead>
                {children}
            </table>
        </div>

    )
        ;
}

export default GetContinents;