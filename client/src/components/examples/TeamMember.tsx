import TeamMember from '../TeamMember';

export default function TeamMemberExample() {
  return (
    <div className="p-8 max-w-sm">
      <TeamMember
        name="Vault"
        initials="V"
        vision="To build research that elevates real understanding and practical skills for everyone."
        role="Co-Founder"
      />
    </div>
  );
}
