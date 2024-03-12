import Navbar from "../../components/Navbar/navbar";
import FileUpload from "../../components/FIleUpload/upload";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="flex align-middle max-md:p-8 md:mt-28 justify-center">
                <FileUpload />
            </div>

            <div className="flex items-center justify-center md:mt-10">
            <button className="bg-white text-gray-900 font-semibold text-white py-2 px-28 border dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 hover:border-transparent rounded">
                Uplaod Image
            </button>

            </div>
        </>
    );
};

export default Dashboard;
