using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest 
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity); // just adding the activity to the memory. Entity Framework starts tracking this. It won't be added to the database at this time.

                await _context.SaveChangesAsync();

                return Unit.Value;  // just letting the api controller that we finished executing this method. 
            }
        }
    }
}
