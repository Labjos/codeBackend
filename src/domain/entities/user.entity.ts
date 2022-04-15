import mongoose from "mongoose"

export const userEntity = () => {

  let userSchema = new moongose.Schema (
    {
            name: String,
            mail: String,
            edad: Number
        }
    )

    return mongoose.model('Users', userSchema)

}