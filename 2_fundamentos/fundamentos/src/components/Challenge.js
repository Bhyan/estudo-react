const Challenge = () => {
    const a = 5
    const b = 10

    const soma = () => {
        console.log(a + b)
    }

    return (
        <div>
            <h1>Valor de A = {a}</h1>
            <h1>Valor de B = {b}</h1>
            <div>
                <button onClick={soma}>Soma de A e B</button>
            </div>
        </div>
    )
}

export default Challenge;