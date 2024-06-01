import CategoryButton from "../../components/categories/CategoryButton";

const CropModal = ({
  title,
  bodyContent,
  secondaryAction,
  actionLabel,
  secondaryActionLabel,
  onSubmit,
}) => {
  const handleSubmit = () => {
    console.log("Here")
    onSubmit();
  };

  const handleSecondaryAction = () => {
    if (!secondaryAction) {
      return;
    }

    secondaryAction();
  };

  return (
    <div className="flex flex-col gap-6">
      <h1>{title}</h1>
      <div>{bodyContent}</div>

      <div className="flex flex-row items-center gap-4 w-full">
        {secondaryAction && secondaryActionLabel && (
          <CategoryButton
            outline
            label={secondaryActionLabel}
            onClick={handleSecondaryAction}
          />
        )}
        <CategoryButton label={actionLabel} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CropModal;
