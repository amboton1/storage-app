import { cn } from "~/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCoffee, faSearch, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 fixed w-full z-50">
            <div className="flex items-center justify-between h-full px-6">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-semibold text-blue-600">CloudStore</h1>
                </div>

                <div className="flex-1 max-w-2xl mx-4">
                    <div className="relative">
                        <FontAwesomeIcon className="absolute left-3 top-1/2 -translate-y-1/2" icon={faSearch} />
                        <Input
                            type="text"
                            placeholder="Search files and folders..."
                            className="w-full pl-10 pr-4 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Button className="!rounded-button bg-blue-600 text-white hover:bg-blue-700">
                        <FontAwesomeIcon className="mr-2" icon={faUpload} />
                        Upload
                    </Button>
                    <button className="relative cursor-pointer">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            3
                        </span>
                    </button>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://public.readdy.ai/ai/img_res/35fa770c2eb693f06d44f6fb3609c93d.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}