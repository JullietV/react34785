import EmptyState from "./commons/EmptyState";

export default function Page404 () {
  return (
    <EmptyState 
      img="/img/cat.png" 
      title="No hemos encontrado esta página"
      subtitle="El gato se ha vuelto a acostar sobre los archivos"
      textBtn="Volver al inicio"
      hrefBtn="/"
    />
  )
}