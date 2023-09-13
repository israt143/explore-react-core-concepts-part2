import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAddTeam = () => {
        const newTeam = team + 1 
        setTeam(newTeam);
    }
    const handleRemoveTeam = () => {
        const newTeam = team - 1 
        setTeam(newTeam);
    }


    const teamStyles = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    };
    return (
        <div style={teamStyles}>
            <h3>Players: {team}</h3>
            <button onClick={handleAddTeam}>Add</button>
            <button onClick={handleRemoveTeam}>Remove</button>
        </div>
    )
}