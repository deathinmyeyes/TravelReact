export default function MainMap () {
    return (
        <>
            <div className="main__map">
                <h1>Карта</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12893.422052760465!2d61.431540714476974!3d55.16128767821281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1728648340735!5m2!1sru!2sru"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                ></iframe>
            </div>
        </>
    )
}