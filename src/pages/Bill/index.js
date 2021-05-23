import React from "react"
import {Container} from "reactstrap"
import Breadcrumb from "../../components/Common/Breadcrumb";

const Bills = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumb path="/bills" title={null} item="Facturación"/>
                    <h1>building</h1>

                </Container>
            </div>
        </React.Fragment>
    )
}
export default Bills;
