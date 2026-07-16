import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <main className="flex flex-1 overflow-hidden">

          <section className="flex-1 p-6 overflow-y-auto">
            {children}
          </section>

          <RightPanel />

        </main>

      </div>

    </div>
  );
}
