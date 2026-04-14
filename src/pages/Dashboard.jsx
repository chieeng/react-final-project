import Topbar from "../components/Topbar";
import BoardingCard from "../components/BoardingCard";

function Dashboard({ bookings }) {
  return (
    <div className="container">

      <Topbar />

      {/* STATS */}
      <div className="stats">

        <div className="stat-card">
          <h4>Available Boarding Houses</h4>
          <p>24</p>
        </div>

        <div className="stat-card">
          <h4>Your Bookings</h4>
          <p>{bookings.length}</p>
        </div>

        <div className="stat-card">
          <h4>Messages</h4>
          <p>5</p>
        </div>

      </div>

      {/* BOOKINGS */}
      <div className="suggestions">

        <h3>Your Bookings</h3>

        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="cards">
            {bookings.map((item, index) => (
              <BoardingCard
                key={index}
                id={item.id}
                title={item.title}
                location={item.location}
                price={item.price}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;