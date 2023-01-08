import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: "ervzmbw0",
    dataset: "production",
    apiVersion: "2023-01-05",
    useCdn: true,
    token: "skhvpMLZdOXB6Aivn1IDDW7brt3uTdBaGXLiFBQDvWviJANGnGDPK9nmDTziIZvB4nLeTLGjkNKE5kb4YJG80YTUZ1XLgckZNXAE03pVsmcQiV2MoOuU6EliBoyDlWN1gVatCybCSr1zXJFXhugeFEXmDaycjjmSbj3PEoS54maGQTtLWIuC"
    
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)