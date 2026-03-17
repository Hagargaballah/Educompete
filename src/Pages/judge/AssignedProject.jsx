import Sidebar from "../../components/layout/navigation";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectDetailsCard from "../../components/judge/review/ProjectDetails";
import ProjectFilesCard from "../../components/judge/review/ProjectFiles";
import EvaluationCriteriaCard from "../../components/judge/review/EvaluationCriteria";
import ReviewCommentsCard from "../../components/judge/review/ReviewComments";
import ScoreSummaryCard from "../../components/judge/review/ScoreSummary";
import ScoringGuide from "../../components/judge/review/ScoringGuide";
import ReviewTips from "../../components/judge/review/ReviewTips";
import { mockProjects, mockRubric } from "../../data/mockData";
import { Send } from "lucide-react";
import '../../Styles/judge/judge.css'

export default function AssignedProject() {

    // get projectId
    const { projectId } = useParams();

    // find the selected project using projectId
    const project = mockProjects.find(p => p.id === projectId);

    // to store scores for each evaluation criterion
    const [scores, setScores] = useState({});
    // to store the comment from judge
    const [comments, setComments] = useState("");

    // if no project matches the id in
    if (!project) return <div className="p-5">Project not found</div>;

    // updates the score when the slider changes
    const handleScoreChange = (criterionId, value) => {
        setScores(prev => ({
            ...prev,
            [criterionId]: value
        }));
    };

    // calculate the total score
    const totalScore = mockRubric.criteria.reduce((sum, c) => {
        return sum + (scores[c.id] || 0);
    }, 0);

    // submit review
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        const reviewData = {
            projectId: project.id,
            scores: scores,
            comments: comments
        };

        console.log("Review Data:", reviewData);

    };



    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="judge" />
                {/* AssignedProject */}
                <section className="AssignedProject col ms-4 ms-md-5 ms-lg-0">

                    <div className="container-fluid py-4 px-4 bg-light min-vh-100">
                        {/* Header */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            {/* back btn */}
                            <Link to="/JudgeDashBoard" className="btn">
                                ← Back
                            </Link>
                            {/* project name */}
                            <div>
                                <h3 className="fw-bold mb-1">{project.title}</h3>
                                <p className="text-muted mb-0">
                                    Review and score this project
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            {/* LEFT */}
                            <form className="col-lg-8 d-flex flex-column gap-4" onSubmit={handleSubmit}>

                                {/* Project Details */}
                                <ProjectDetailsCard project={project} />
                                {/* project files */}
                                <ProjectFilesCard files={project.files} />
                                {/* Evaluation Criteria */}
                                <EvaluationCriteriaCard
                                    rubric={mockRubric}
                                    scores={scores}
                                    onScoreChange={handleScoreChange}
                                />
                                {/* Review Comments */}
                                <ReviewCommentsCard
                                    comments={comments}
                                    setComments={setComments}
                                />
                                {/* buutons */}
                                <div className="d-flex gap-3">
                                    <button type="submit" className="btn btn-primary flex-grow-1 d-flex justify-content-center align-items-center gap-2" >
                                        <Send size={20} />
                                        Submit Review
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        Save Draft
                                    </button>
                                </div>

                            </form>

                            {/* RIGHT */}
                            <div className="col-lg-4 d-flex flex-column gap-4">
                                {/* Score Summary */}
                                <ScoreSummaryCard
                                    rubric={mockRubric}
                                    scores={scores}
                                    totalScore={totalScore}
                                />
                                {/* Scoring Guide */}
                                <ScoringGuide />
                                {/* Review Tips */}
                                <ReviewTips />
                            </div>

                        </div>

                    </div>

                </section>
            </section>
        </section>
    )
}