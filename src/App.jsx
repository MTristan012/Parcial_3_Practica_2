import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="cover">
          <form className="flex-form badge rounded-pill">
            <label htmlFor="from">
              <i className="ion-location"></i>
            </label>
            <button className="rounded-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#5f8fa4"
                className="bi bi-search"
                viewBox="0 0 15 15"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>

            <input type="search" />
            <button className="rounded-circle btn bg-danger bg-opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#c70000"
                className="bi bi-mic-fill"
                viewBox="0 0 15 15"
              >
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
