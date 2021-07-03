import { useQuery, gql } from "@apollo/client";

const GET_CONTINENTS = gql`
query { 
    continents{
        code
        name
          countries{
          name
        }
        
      }
  }
     
`;

function GetContinents() {

    const { loading, error, data } = useQuery(GET_CONTINENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const children = data.continents.map((item) => (
        <tr key={item.code}>
            <td><a href="#">{item.code}</a></td>
            <td>{item.name}.</td>
            <td>{item.countries.length}</td>
        </tr>
    ))

    return (
        <div>
            <table id="continent">
                <colgroup span="3"></colgroup>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Name of Countries</th>
                </tr>
                {children}

            </table>

        </div>

    )
        ;
}

export default GetContinents;