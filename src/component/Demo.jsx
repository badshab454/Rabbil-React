const Demo = () => {
    return (
        <div>
            <input type="text" placeholder="name" />
            <button onClick={() => alert("Hello Submiter")}>Submit</button>
            <h1>{new Date().getDate()}</h1>
        </div>
    );
};

export default Demo;