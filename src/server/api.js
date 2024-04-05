// Add job
export const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};

// Update job
export const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
};

// Delete job
export const deleteJob = async (jobId) => {
  const res = await fetch(`/api/jobs/${jobId}`, {
    method: "DELETE",
  });
  return;
};
