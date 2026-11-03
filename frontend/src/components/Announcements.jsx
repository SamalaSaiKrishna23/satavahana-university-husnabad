import { api } from '../api';
import { Card, useLoad } from '../ui';

export default function Announcements() {

  const {
    data: announcements,
    err
  } = useLoad(() => api('/announcements'));

  if (err) {
    return (
      <p className="text-red-600 text-sm">
        Unable to load announcements: {err}
      </p>
    );
  }

  if (!announcements) {
    return <p className="text-sm">Loading notifications...</p>;
  }

  return (
    <section className="mb-6">

      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            College Announcements
          </h2>

          <p className="text-sm text-slate-500">
            Latest updates and important information
          </p>
        </div>

        <span className="text-sm text-indigo-700 font-medium">
          {announcements.length} Updates
        </span>
      </div>

      <div className="space-y-3">

        {announcements.map((item) => (

          <Card key={item.id}>

            <div className="flex justify-between gap-3">

              <div>
                <span className="text-xs font-semibold
                  text-indigo-700 bg-indigo-50 px-2 py-1 rounded">
                  {item.category}
                </span>

                <h3 className="font-bold mt-3 text-slate-800">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2
                  leading-6 whitespace-pre-line">
                  {item.message}
                </p>

                <p className="text-xs text-slate-400 mt-3">
                  Published: {
                    new Date(item.created_at).toLocaleString()
                  }
                </p>
              </div>

              <span className="text-xl">🔔</span>

            </div>

          </Card>

        ))}

        {announcements.length === 0 && (
          <Card>
            <p className="text-sm text-slate-500">
              No new announcements available.
            </p>
          </Card>
        )}

      </div>

    </section>
  );
}