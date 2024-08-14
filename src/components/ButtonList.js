import Button from "./Button"

const btnList = ["All","Gaming","Songs","Cricket","Soccer","News","Cooking","Dance", "Live", "Comedy"]

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map(btn => <Button key={btn} name={btn}/>)}
    </div>
  )
}

export default ButtonList