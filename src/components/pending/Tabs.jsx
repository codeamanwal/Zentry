function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ tabs, onTabClick }) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current)?.name || tabs[0].name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="sm:block">
        <nav className="flex" aria-label="Tabs">
          {tabs.map((tab) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={tab.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onTabClick(tab.name);
              }}
              className={classNames(
                tab.current
                  ? "bg-gray-100 text-black"
                  : "text-black bg-slate-300 hover:text-gray-700",
                "px-1 py-2 text-sm font-medium text-center border-2 border-slate-300 border-b-0 rounded-t-lg"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
