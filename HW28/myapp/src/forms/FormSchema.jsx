import { z } from "zod";
import React from "react";
const FormSchema = z.object({
    element: z.string().min(1,'this field can`t be empty').min(5, 'this field requires minimum 5 chars')
  })
  export default FormSchema