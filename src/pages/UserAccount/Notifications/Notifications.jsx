import useNotifications from "../../../hooks/useNotifications";

const Notifications = () => {
  const [notifications] = useNotifications();
  return (
    <div className="p-4 mt-12">
      {notifications.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className="card w-[450px] bg-gray-700 shadow-sm p-4 rounded-lg"
            >
              <div className="card-body">
                <h2 className="text-xl font-bold text-center">
                  Received Amount: $ {notification.amount}
                </h2>
                <p className="text-center font-semibold text-lg">
                  {notification.message}!
                </p>
                <p className="text-center font-semibold text-base">
                  Received Time: {new Date(notification.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 font-bold text-3xl mt-72 text-center">
          No New Notifications!
        </p>
      )}
    </div>
  );
};

export default Notifications;
