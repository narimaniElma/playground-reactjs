import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HomePage, JobsPage, NotFoundPage, AddJobPage, JobPage, EditJobPage } from "./pages";
import {addJob, updateJob, deleteJob} from "./server/api";

const jobLoader = async ({params}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App