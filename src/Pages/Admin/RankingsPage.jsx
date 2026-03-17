import { useState, useMemo } from "react";
import { mockTeams, mockCompetition } from "../../data/mockData";
import Sidebar from "../../components/layout/navigation";
import FilterBar from "../../components/Admin/Rankings/FilterBar";
import TopThreeCards from "../../components/Admin/Rankings/TopThreeCards";
import RankingTable from "../../components/Admin/Rankings/RankingTable";


const RankingsPage = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const sortedTeams = useMemo(() => {
        return mockTeams
            .filter((team) => team.score !== undefined)
            .sort((a, b) => b.score - a.score)
            .map((team, index) => ({
                ...team,
                rank: index + 1,
            }));
    }, []);

    const filteredTeams =
        selectedCategory === "All"
            ? sortedTeams
            : sortedTeams.filter((t) => t.category === selectedCategory);

    const top3Teams = sortedTeams.slice(0, 3);

    return (

        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* Rankings */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">

                    <div className="container py-5">

                        <div className="text-center mb-5">
                            <h1 className="fw-bold mb-2">🏆 Live Rankings 🏆</h1>

                            <p className="text-muted">
                                {mockCompetition.name}
                            </p>

                            <div className="d-inline-flex align-items-center gap-2">
                                <span
                                    className="rounded-circle d-inline-block"
                                    style={{
                                        width: 10,
                                        height: 10,
                                        background: "#2e7d32",
                                        animation: "pulse 1.5s infinite",
                                    }}
                                />
                                <span className="text-success fw-semibold small">Live Updates</span>
                            </div>
                        </div>

                        <FilterBar
                            categories={mockCompetition.categories}
                            selected={selectedCategory}
                            onChange={setSelectedCategory}
                        />

                        <TopThreeCards teams={top3Teams} />

                        <RankingTable teams={filteredTeams} />

                    </div>


                </section>
            </section>
        </section>


    );
};

export default RankingsPage;
