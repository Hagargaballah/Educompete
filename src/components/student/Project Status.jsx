import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import SubmitBtn from '../ui/submitBtn';
import Submission_Checklist from './Submission Checklist ';
import UploadedFiles from './Uploaded Files ';

export default function ProjectStatus({ project, requiredFiles }) {

    return (
        <section className="mt-5 bg-white border shadow-sm p-4 rounded-4">

            {/* header (always visible) */}
            <section className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <h5 className='fw-bold'>Project Status</h5>
                <SubmitBtn />
            </section>

            {/* team information or placeholder */}
            {!project ? (
                <section className="mt-5 text-center">
                    <h5 className="fw-bold text-muted">
                        Project data has not been registered yet
                    </h5>
                    <p className="text-muted mt-2">
                        Please add your project and upload the files to start your submission
                    </p>
                </section>
            ) : (
                <>
                    <section className='mt-5'>
                        <h5>{project.title}</h5>
                        <p className='text-muted mt-3 small fs-6'>
                            {project.description}
                        </p>
                        <div className='d-flex flex-column flex-md-row gap-3 align-items-md-center mt-4'>
                            <p className='text-primary small bg-success-subtle px-2 py-1 rounded-4 fw-semibold'>
                                {project.category}
                            </p>
                            <p className='text-success small bg-primary-subtle px-2 py-1 rounded-4 fw-semibold'>
                                {project.status}
                            </p>
                        </div>
                    </section>

                    {/* Submission Checklist */}
                    <section>
                        <h6 className="mt-4">Submission Checklist</h6>
                        <Submission_Checklist files={project.files} requiredFiles={requiredFiles} />
                    </section>

                    {/* Uploaded Files */}
                    <section>
                        <h6 className="mt-5">Uploaded Files</h6>
                        <UploadedFiles files={project.files} />
                    </section>
                </>
            )}
        </section>
    )
}