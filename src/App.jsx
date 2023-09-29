const App = () => {
 const status = true;
    return (
      <div>
        {status?<button>Logout</button>:<button>Login</button>}
      </div>
    )
};

export default App;
