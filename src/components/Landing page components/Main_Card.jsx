import React from "react";
import Card from "./Card";

export default function Cards() {
    return (
        <section className='container-fluid mt-5 px-4 pb-5'>
            <div className='text-center'>
                <h1 className='mt-5 fw-bold display-5'>Welcome to EduCompete</h1>
                <p className='text-muted mt-4 fs-5'>A complete, modern platform for managing educational competitions from registration to certificates</p>
            </div>
            <section className='row mt-5 gap-lg-4 justify-content-center'>
                <Card icon="bi bi-people"
                    bgColor="#e1f6ff"
                    textColor="blue"
                    title='Team Management'
                    sub_title='Register teams, manage members, and track participation across your competition'
                />
                <Card icon="bi bi-file-earmark-text"
                    bgColor="#e6f7ec"
                    textColor='green'
                    title='Project Submission'
                    sub_title='Easy file upload, version control, and submission tracking for all team projects'
                />
                <Card icon="bi bi-mortarboard"
                    bgColor="#f2e7ff"
                    textColor='blueviolet'
                    title='Electronic Judging'
                    sub_title='Rubric-based scoring system with comment sections for comprehensive evaluation'
                />
                <Card icon="bi bi-trophy"
                    bgColor="#fff5e6"
                    textColor="yellow"
                    title='Live Rankings'
                    sub_title='Real-time leaderboard with category filters and animated updates'
                />
                <Card icon="bi bi-award"
                    bgColor="#fff0e6"
                    textColor="orange"
                    title='Certificate Generation'
                    sub_title='Automated certificate creation with customizable templates and bulk distribution'
                />
                <Card icon="bi bi-bar-chart"
                    bgColor="#e6f7f7"
                    textColor="rgb(18, 73, 18)"
                    title='Analytics Dashboard'
                    sub_title='Comprehensive insights with charts, statistics, and progress tracking'
                />
            </section>
        </section>
    )

}