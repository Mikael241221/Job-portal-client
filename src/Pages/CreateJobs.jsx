import { useForm } from "react-hook-form"

const CreateJobs = () => {
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => {
            console.log(data)
        }
      
      
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form  */}
        <div className="bg-[#FAFAFA] py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* 1st row  */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Job Title</label>
        <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
        <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Company Name </label>
        <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
      </div>
      {/* 2nd row  */}
    
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Minimum Salary </label>
        <input type="text" placeholder="$20k" {...register("minPrice")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
        <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Maximum Salary </label>
        <input type="text" placeholder="$100k" {...register("maxPrice")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
      </div>
      {/* 3rd row  */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
         <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Salary Type </label>
        <select {...register("salaryType")}  className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" >
        <option value="">Choose your Salary</option>
        <option value="hourly">Hourly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
        </div> 
        <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Job Location </label>
        <input type="text" placeholder="Ex: New York" {...register("jobLocation")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
      </div>
     
      {/* 4th row  */}
       
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Job Posting Date </label>
        <input type="date" placeholder="2023-10-28" {...register("postingDate")} className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" />
        </div>
         <div className="lg:w-1/2 w-full">
        <label className="block mb-2 text-lg"> Experience Level </label>
        <select {...register("experienceLevel")}  className="block w-full felx-1 border-0 bg-white py-1.5
         pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none
         sm:text-sm sm:leading-6" >
        <option value="">Choose your experience</option>
        <option value="noexperience">NO Experience</option>
        <option value="internships">Internships</option>
        <option value="workremotely">Work remotely</option>
      </select>
        </div> 
      </div>
      {/* 5th row */}
      <div>
      <label className="block mb-2 text-lg"> required Skill Sets: </label>
      </div>

      <input type="submit" className="block mt-12 bg-blue-500 text-white font-semibold px-8 my-2 rounded-sm cursor-pointer" />
    </form>
        </div>

    </div>
  )
}

export default CreateJobs
