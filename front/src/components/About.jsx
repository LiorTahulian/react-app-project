import { PageHeader } from "./common/PageHeader";

export function About() {
  return (
    <PageHeader
      title={
        <>
          We Are RUN<i className="bi bi-4-circle"></i>U
        </>
      }
      description="Hello and welcome to our website. 
      Our website established 3 years ago in 2020 and provides a platform which connect between people who love sport. 
      We realized that most people don't like to exercise alone and always look for teammate.
      So we decided to build a website to connect people to each other.
      Here, in our website, you can create new cards and add people you want to do sport with (after you sign up).
      You can add thier name, the place you want to exercise with them and even their phone and image. 
      We hope you will enjoy our communication of sport ! Have fun !"
    />
  );
}
