import { useEffect } from "react";
import {useForm} from "react-hook-form";
import  toast, {Toaster} from "react-hot-toast"
import { STATUSES } from "../constants/Status";

type Inputs={
    title: string;
    description:string;
    deadline:string;
    status: string;

}


const NewTask = () => {
const {register,handleSubmit,formState,reset}= useForm<Inputs>();

useEffect(()=>{
  reset({title:"",description:"",status:"",deadline: ""}) ; 
},[reset]);

const handleFormSubmit=()=>{
toast.success("task sadded successfully")
    reset();
    
}

  return (
    <div>NewTask
<div>
   <form onSubmit={handleSubmit(handleFormSubmit)}>
    <div>
        <label htmlFor="title">Title
<input type="text"

{...register("title",{
    required:"the title is required",
    pattern:{
        value:/^[a-zA-Z ]+$/,
        message:"title should only contain letters"   
    }
})}
/>
{formState.errors.title &&(
    <p>
        {formState.errors.title.message}
    </p>
)}

        </label>
    </div>
    <div>
        <label htmlFor="description">Description
<input type="text"
{...register("description",{
    required:"the description is required",

    pattern:{
        value:/^[a-zA-Z ]+$/,
        message:"description should only contain letters"   
    }
})}
/>
{formState.errors.description &&(
    <p>
        {formState.errors.description.message}
    </p>
)}

        </label>
    </div>
<div>
<label htmlFor="deadline">Deadline
<input type="date"
{...register("deadline",{
   required:"the deadline is required" 
})}
/>
{formState.errors.deadline &&(
   <p>
    {formState.errors.deadline.message}
   </p> 
)}
</label>

</div>
<div>
          <label htmlFor="status">Status</label>
          <select
            {...register("status", {
              required: "An option should be selected",
            })}
          >
            <option value="">Select status</option>
            {STATUSES.map((status) => (
              <option key={status} value={status} className="capitalize">
                {status}
              </option>
            ))}
          </select>
          {formState.errors.status &&
           (<p>
            {formState.errors.status.message}
            </p>)}
        </div>

    <button type="submit">Submit</button>
    </form> 
    <Toaster/>
</div>


    </div>
  )
}

export default NewTask