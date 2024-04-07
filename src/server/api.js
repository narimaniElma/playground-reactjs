import axios from "axios";

const URL = "/api/jobs";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add job
export const addJob = async (newJob) => {
  try {
    const res = await axios.post(URL, newJob);
  } catch (error) {
    console.log('Error adding job', error.response);
  }
};

// Update job
export const updateJob = async (job) => {
  try {
    const response = await axios.put(URL + `/${job.id}`, job);
  } catch (error) {
    console.log('Error updating job', error.response);
  }
};

// Delete job
export const deleteJob = async (jobId) => {
  try {
    const response = await axios.delete(URL + `/${jobId}`);
  } catch (error) {
    console.log('Error deleting job', error.response);
  }
};