import { fetchAndMapComponents } from "@/utils/componentUtils";
export default async function Index() {
  const pageName = "home";
  const components = await fetchAndMapComponents(pageName);

  return (
    <div>
      <p>Hello</p>
      {components}
    </div>
  );
}
