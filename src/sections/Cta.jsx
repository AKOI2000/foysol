import { useConsultation } from "../context/consultationContext"

function Cta() {
    const {setOnclick} = useConsultation();
    return (
        <section id="cta-section">
            <div className="container">
                <div className="cta-heading">
                    <h3 className="heading-3">Ready to Strengthen Your Insurance & Risk Strategy?</h3>
                    <p>Clarity. Confidence. Control, it starts with one conversation.</p>
                </div>

                <div className="cta-call">
                    <p>Let’s help you protect your organization and unlock growth.</p>
                    <button className="btn btn-main" onClick={()=> setOnclick(onClick => !onClick)}>Book a Strategy session</button>
                </div>
            </div>
            
        </section>
    )
}

export default Cta
