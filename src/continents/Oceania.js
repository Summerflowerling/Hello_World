import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../GetContinents";

function GetOceania() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const children = data.continents.map(item => (item))
    const country = children[5].countries.map(item => {

        const lan = item.languages.map(item => (item.name))
        return (
            <tbody key={item.code}>
                <tr>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.native}</td>
                    <td>{item.capital}</td>
                    <td>{item.currency}</td>
                    <td>{lan.length === 1 ? lan : lan + ""}</td>
                </tr>
            </tbody>
        )
    }
    )

    return (
        <div >
            <h1>Oceania</h1>
            <table id="Oceania" className="table-width">
                <colgroup span="6"></colgroup>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Native</th>
                        <th>Capital</th>
                        <th>Currency</th>
                        <th>Languages</th>
                    </tr>
                </thead>
                {country}
            </table>
        </div>
    );
}

export default GetOceania;