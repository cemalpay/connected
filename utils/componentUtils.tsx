// utils/componentUtils.ts
import { createClient } from "@/utils/supabase/server";
import HeaderComponent from "@/app/components/HeaderComponent";
import TextComponent from "@/app/components/TextComponent";
import ImageComponent from "@/app/components/ImageComponent";

export async function fetchAndMapComponents(pageName: string) {
  const supabase = createClient();
  const { data: components } = await supabase.from(pageName).select();

  console.log(components);

  return (
    <>
      {components &&
        components.map((component) => {
          switch (component.name) {
            case "text":
              return (
                <div key={component.id}>
                  <TextComponent>{component.content}</TextComponent>
                </div>
              );
            case "header":
              return (
                <div key={component.id}>
                  <HeaderComponent>{component.content}</HeaderComponent>
                </div>
              );
            case "image":
              return (
                <div key={component.id}>
                  <ImageComponent src={component.src} alt={component.alt} />
                </div>
              );
            default:
              return null;
          }
        })}
    </>
  );
}
