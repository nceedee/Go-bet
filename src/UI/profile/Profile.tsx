import { ReactNode } from "react";
import addPd from '../../asset/image/dp.jpg'



type ImageType = React.ComponentProps<"img"> & { name?: string } & { icon?: ReactNode } & { email?: string };

export const Profile = ({ className, icon, name, email, ...props }: ImageType) => {
    return (
        <div>
            <img src={addPd} alt="dp here" className={ className} />
        </div>
    )
}