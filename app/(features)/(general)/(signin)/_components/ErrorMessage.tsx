import { FieldError } from "react-hook-form"
import { motion } from "framer-motion"
interface Props {
    error: FieldError
}
const ErrorMessage = ({ error }: Props) => {
    return (
        <motion.div
            className="text-red-600 text-sm -mt-1"
            initial={{ x: 0 }}
            animate={{
                x: [0, -8, 8, -8, 8, 0],
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
            }}
        >
            {error.message}
        </motion.div>
    )
}

export default ErrorMessage
