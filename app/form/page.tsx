import PageHeader from "../components/page-header";
import { Form } from "./components/form";

export const metadata = {
    title: "Algebra Labs | Contact form",
    description: "Algebra Labs contact form page",
};

const FormPage = () => {

    return <section>
        <PageHeader title="Contact us" description="" />
        <Form />
    </section>
}

export default FormPage;